class SearchAndFilter {
    searchAndFilter(
        courses,
        option,
        searchTags,
        subject,
        minimumCredits,
        maximumCredits
    ) {
        if (option === 0)
            return this.searchAndFilterUnion(
                courses,
                searchTags,
                subject,
                minimumCredits,
                maximumCredits
            );
        if (option === 1)
            return this.searchAndFilterIntersection(
                courses,
                searchTags,
                subject,
                minimumCredits,
                maximumCredits
            );
    }

    searchAndFilterUnion(
        courses,
        searchTags,
        subject,
        minimumCredits,
        maximumCredits
    ) {
        if (searchTags !== undefined && searchTags.length != 0) {
            let coursesAfterSearch = [];

            for (const course of Object.values(courses)) {
                if (course.keywords.some(r => searchTags.includes(r))) {
                    coursesAfterSearch.push(course);
                }
            }
            courses = coursesAfterSearch;
        }

        if (subject !== "All") {
            let coursesAfterSubject = [];

            for (const course of Object.values(courses)) {
                if (course.subject === subject)
                    coursesAfterSubject.push(course);
            }
            courses = coursesAfterSubject;
        }

        if (minimumCredits !== "") {
            let coursesAfterMinimumCredits = [];

            for (const course of Object.values(courses)) {
                if (course.credits >= parseInt(minimumCredits))
                    coursesAfterMinimumCredits.push(course);
            }
            courses = coursesAfterMinimumCredits;
        }

        if (maximumCredits !== "") {
            let coursesAfterMaximumCredits = [];

            for (const course of Object.values(courses)) {
                if (course.credits <= parseInt(maximumCredits))
                    coursesAfterMaximumCredits.push(course);
            }
            courses = coursesAfterMaximumCredits;
        }

        return courses;
    }

    searchAndFilterIntersection(
        courses,
        searchTags,
        subject,
        minimumCredits,
        maximumCredits
    ) {
        if (searchTags !== undefined && searchTags.length != 0) {
            let coursesAfterSearch = [];

            for (const course of Object.values(courses)) {
                if (searchTags.every(r => course.keywords.includes(r))) {
                    coursesAfterSearch.push(course);
                }
            }
            courses = coursesAfterSearch;
        }

        if (subject !== "All") {
            let coursesAfterSubject = [];

            for (const course of Object.values(courses)) {
                if (course.subject === subject)
                    coursesAfterSubject.push(course);
            }
            courses = coursesAfterSubject;
        }

        if (minimumCredits !== "") {
            let coursesAfterMinimumCredits = [];

            for (const course of Object.values(courses)) {
                if (course.credits >= parseInt(minimumCredits))
                    coursesAfterMinimumCredits.push(course);
            }
            courses = coursesAfterMinimumCredits;
        }

        if (maximumCredits !== "") {
            let coursesAfterMaximumCredits = [];

            for (const course of Object.values(courses)) {
                if (course.credits <= parseInt(maximumCredits))
                    coursesAfterMaximumCredits.push(course);
            }
            courses = coursesAfterMaximumCredits;
        }

        return courses;
    }
}

export default SearchAndFilter;
