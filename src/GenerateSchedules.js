generateSchedules = () => {
    let courses = this.props.schedules;
    console.log(courses);

    let generate = [];
    let timeBlocks = [];

    for (const course of courses) {
        let courseTimeBlocks = [];
        let tuple = {};
        tuple.name = course.name;
        tuple.number = course.number;
        for (const section of course.sections) {
            if (section.subsections.length === 0) {
                tuple.sec = section;
                courseTimeBlocks.push(tuple);
            } else {
                for (const subsection of section.subsections) {
                    tuple.sec = section;
                    tuple.sub = subsection;
                    courseTimeBlocks.push(tuple);
                }
            }
        }
        timeBlocks.push(courseTimeBlocks);
    }
    // console.log(timeBlocks);
    let combinations = this.combine(timeBlocks);
    console.log(combinations);
    combinations.filter(combo => {
        return !this.checkConflict(combo);
    });
};

checkConflict = combo => {
    let d = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
    };
    console.log("combo", combo);
    for (const elem of combo) {
        let { sec, sub } = elem;
        if (sec) {
            let days = Object.keys(sec.time);
            for (const day of days) {
                // console.log(day);
                let times = sec.time[day].split("- ");
                let startTime = this.getTime(times[0]);
                let endTime = this.getTime(times[1]);
                let interval = {
                    startTime,
                    endTime
                };
                d[day].push(interval);
            }
        }
    }
    for (const day in d) {
        let array = d[day];
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1].endTime > array[i].startTime) return true;
        }
        console.log(array);
    }

    return false;
};

checkInterval = (interval1, interval2) => {
    return interval1.start < interval2.start ? true : false;
};

combine = arraysToCombine => {
    var divisors = [];
    for (var i = arraysToCombine.length - 1; i >= 0; i--) {
        divisors[i] = divisors[i + 1]
            ? divisors[i + 1] * arraysToCombine[i + 1].length
            : 1;
    }

    function getPermutation(n, arraysToCombine) {
        var result = [],
            curArray;
        for (var i = 0; i < arraysToCombine.length; i++) {
            curArray = arraysToCombine[i];
            result.push(
                curArray[Math.floor(n / divisors[i]) % curArray.length]
            );
        }
        return result;
    }

    var numPerms = arraysToCombine[0].length;
    for (var i = 1; i < arraysToCombine.length; i++) {
        numPerms *= arraysToCombine[i].length;
    }

    var combinations = [];
    for (var i = 0; i < numPerms; i++) {
        combinations.push(getPermutation(i, arraysToCombine));
    }
    return combinations;
};

getTime = string => {
    let time = string.substring(0, string.length - 2);
    let subs = time.split(":");
    let hour = parseInt(subs[0]);
    let minute = parseInt(subs[1]) / 60;
    return hour + minute;
};
