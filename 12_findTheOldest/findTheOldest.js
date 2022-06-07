const findTheOldest = function(array) {
    const isLiving = array.some((person) => {
        if (typeof person.yearOfDeath === `undefined`) {
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    const oldest =
    array.sort((a, b) =>
    a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1
);
    return oldest[oldest.length -1];
};
// Do not edit below this line
module.exports = findTheOldest;
