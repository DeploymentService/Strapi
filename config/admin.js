module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7268d47cc1eeb2b1336e2c41dc8b4f95'),
  },
});
