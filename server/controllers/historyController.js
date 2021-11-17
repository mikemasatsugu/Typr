const express = require('express');

const historyController = {};

historyController.getHistory = (req, res, next) => {
  next();
}

historyController.addResults = (req, res, next) => {
  next();
}

historyController.deleteHistory = (req, res, next) => {
  next();
}

module.exports = historyController;