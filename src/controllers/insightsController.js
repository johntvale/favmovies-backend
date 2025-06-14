const { getDashboardInsights } = require("../services/insightsService");

const getInsightsController = async (_req, res, next) => {
  try {
    const result = await getDashboardInsights();
    res.status(200).json(result);
  } catch (error) {
    next(error);    
  }
};

module.exports = {
  getInsightsController,
}