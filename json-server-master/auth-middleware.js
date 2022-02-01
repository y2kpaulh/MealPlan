module.exports = (req, res, next) => {
    //res.header('X-Hello', 'World')
    if (req.path == '/mealPlan') {
        next()
    } else {
        res.status(400).json({ "err": "데이터 요청 오류가 발생했습니다." })
    }
  }