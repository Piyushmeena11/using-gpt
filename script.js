function showCourseDetails(courseId) {
    document.querySelectorAll('.course-details').forEach(detail => {
        detail.style.display = 'none';
    });
    document.getElementById(courseId).style.display = 'block';
}

function enroll(courseName) {
    alert(`You have enrolled in ${courseName}`);
}
