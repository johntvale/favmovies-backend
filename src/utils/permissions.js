const hasAccess = (user, storedId) => {
  if (!user || !storedId) return false;

  const allowedToProceed = user.role === 'admin' || user.id === storedId.toString();

  return allowedToProceed;
}

module.exports = hasAccess;