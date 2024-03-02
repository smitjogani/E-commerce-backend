const orderService = require("../../Services/Order/order.service");

const createOrder = async (req, res) => {
  const user = req.user;
  try {
    const createdOrder = await orderService.createOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = req.user;
  try {
    const findOrder = await orderService.findOrderById(req.params.id);
    return res.status(201).send(findOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    const orderedHistory = await orderService.userOrderHistory(user._id);
    return res.status(201).send(orderedHistory);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};



module.exports = { createOrder, findOrderById, orderHistory };