const { OAuth2Client, auth } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/user");


dotenv.config({ path: "./.env" });
const client = new OAuth2Client(process.env.GG_CLIENT_ID);

const googleAuth = async (token) => {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: [process.env.GG_CLIENT_ID],
	});
	return ticket.getPayload();
};

const verifyToken = async (req, res, next) => {
	const authHeader = req.header("Authorization");
	const token = authHeader && authHeader.split(" ")[1];
	if (!token)
		return res
			.status(401)
			.json({ success: false, message: "Access token not found" });
	try {
		//Try with token from google
		const user = await googleAuth(token);

		let userMap = await User.findOne({ email: user.email });

		//Checked account is active
		if (!userMap.isHidden) {
			req.body.userAuth = userMap;
			req.headers.authorization = token;
			next();
		} else {
			res.status(403).json({
				message: "Your account is blocked",
				success: false,
			});
		}
	} catch (error) {
		//Login by enter email and password
		try {
			let account;
			jwt.verify(
				token,
				process.env.GG_CLIENT_SECRET,
				function (err, payload) {
					if (typeof payload != "undefined") {
						account = payload.verifyAccount;
						req.body.verifyAccount = account;
						req.headers.authorization = token;
						next();
					} else {
						return res.status(401).json({
							message: "Authentication failed!",
							success: false,
						});
					}
				}
			);
			// const decode = jwt.decode(token, process.env.GG_CLIENT_SECRET);
			// req.accountId = decode.accountId;
			// next();
		} catch (error) {
			console.log(error);
			res.status(403).json({ success: false, message: "Invalid token" });
		}
	}
};

module.exports = verifyToken