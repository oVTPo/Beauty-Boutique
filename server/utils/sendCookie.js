import dotenv from "dotenv";

dotenv.config();

const sendCookie = (user = {}, statusCode, res) => {
  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE);

  // Kiểm tra nếu COOKIE_EXPIRE không hợp lệ
  if (isNaN(cookieExpireDays)) {
    throw new Error("Invalid COOKIE_EXPIRE value in .env");
  }

  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  // Kiểm tra nếu options.expires không phải là Date hợp lệ
  if (!(options.expires instanceof Date) || isNaN(options.expires.getTime())) {
    throw new Error("Invalid expires option for cookie");
  }

  const { password, idToken, ...userWithoutPassword } = user;

  res.status(statusCode).cookie("token", idToken, options).json({
    success: true,
    user: userWithoutPassword,
  });
};

export default sendCookie;
