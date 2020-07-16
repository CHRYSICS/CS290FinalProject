var schoolData = [{header:"SCHOOL",
                    name:"Oregon State University: College of Computer Science & Engineering",
                    degree: "Post-Bachelor Computer Science Degree",
                enrolled:"Fall 2019 - Present (expected graduation Spring 2021",
                    awards:"Dean's List",
                    logo:"./img/OSU_vertical_2C_O_over_B.png",
                citation:"https://oregonstate.app.box.com/s/ef2r8wr5ptzaomck0s6e28gaqw5zjh7q/file/376698848043"},
                    {header:"SCHOOL",
                    name:"University of Alaska Fairbanks: College of Natural Science and Mathematics",
                    degree:"Bachelor in Science Physics degree",
                    enrolled:"Fall 2013 - Spring 2017",
                    awards:"Member of Society of Physics Students student chapter",
                    logo:"./img/UAFLogo_A_647.png",
                citation:"https://www.uaf.edu/universityrelations/guidelines/logos/"}

                ]
//Get container for school info
var schoolsContainer = document.getElementById('school-history');
//Create container for school logo

schoolData.forEach(school => {
    var schoolDiv = document.createElement('div');
    schoolDiv.className = "schoolDiv";
    schoolDiv.style.display = "inline-block";
    schoolDiv.style.width = "100%";
    //create new container for logo
    var logoContainer = document.createElement('div');
    logoContainer.className = "school-logo";
    //Create image element for logo
    var logo = document.createElement('img');
    logo.setAttribute('src', school.logo);
    logo.setAttribute('alt', school.name + "Logo Image");
    logoContainer.appendChild(logo);
    //Add Break to container for citation line
    logoContainer.appendChild(document.createElement('br'));
    //Add citation of school logo
    var citationLink = document.createElement('a');
    citationLink.textContent = "Logo Citation";
    citationLink.setAttribute('href', school.citation);
    citation = document.createElement('cite');
    citation.appendChild(citationLink);
    logoContainer.appendChild(citation);
    //Add content to school container
    schoolDiv.appendChild(logoContainer);

    //create new container for table
    var schoolData = document.createElement('div');
    schoolData.className = "school-info";
    //Create new table
    var newTable = document.createElement('table');
    schoolData.appendChild(newTable);
    //Create new table header
    var header = document.createElement('th');
    header.textContent = school.header;
    var headerRow = document.createElement('tr');
    headerRow.appendChild(header);
    var tableHeader = document.createElement('thead');
    tableHeader.appendChild(headerRow);
    newTable.appendChild(tableHeader);
    //Create table body
    var tableBody = document.createElement('tbody');
    //Add name data to table
    var name = document.createElement('td');
    name.textContent = school.name;
    var nameRow = document.createElement('tr');
    nameRow.appendChild(name);
    tableBody.appendChild(nameRow);
    //Add degree data to table
    var degree = document.createElement('td');
    degree.textContent = school.degree;
    var degreeRow = document.createElement('tr');
    degreeRow.appendChild(degree);
    tableBody.appendChild(degreeRow);
    //add enrolled data to table
    var enrolled = document.createElement('td');
    enrolled.textContent = school.enrolled;
    var enrolledRow = document.createElement('tr');
    enrolledRow.appendChild(enrolled);
    tableBody.appendChild(enrolledRow);
    //Add awards and such to table
    var awards = document.createElement('td');
    awards.textContent = school.awards;
    var awardsRow = document.createElement('tr');
    awardsRow.appendChild(awards);
    tableBody.appendChild(awardsRow);
    newTable.appendChild(tableBody);
    //Add content to school container then page
    schoolDiv.appendChild(schoolData);
    schoolsContainer.appendChild(schoolDiv);
})