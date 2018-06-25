module.exports = {

  getCurrentDateTime: function() {
    const today = new Date();

    // this sysdate object is created in such a way that if in future
    // more date related contraints are to be added, it will be simple
    var sysdate = {

      "hour": today.getHours(),
      "minutes": today.getMinutes(),
      "seconds": today.getSeconds(),

      "year": today.getFullYear(),
      "month": today.getMonth() + 1,
      "date": today.getDate(),
      "day": today.getDay()
    }

    return sysdate;
  }
};