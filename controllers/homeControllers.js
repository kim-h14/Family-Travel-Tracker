import { checkVisisted, getCurrentUser, users } from './userController.js';

export const renderHomePage = async (req, res) => {
  const countries = await checkVisisted();
  const currentUser = await getCurrentUser();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color,
  });
};
