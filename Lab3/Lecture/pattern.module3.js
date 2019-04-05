function Course(){
    this.courseName = 'MWA';
    this.getCourseName = function(){
        console.log(this.courseName);
    }
}

module.exports = new Course();
