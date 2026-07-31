const app = {
  status: 'ok',
  health: () => ({ status: 'HEALTHY', timestamp: new Date().toISOString() })
};

console.log('App loaded:', app.status);
module.exports = app;
