function define(name, getter) {
  Object.defineProperty(Array.prototype, name, {
    get: getter
  });
}

['number', 'sum', 'mean', 'median', 'variance', 'standard_deviation', 'percentile'].forEach(function(module) {
  require('./descriptive_statistics/' + module + '.js')(define);
});
