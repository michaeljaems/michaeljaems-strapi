module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f77054ac9977e24d5db10b84a233f2c7'),
  },
});
