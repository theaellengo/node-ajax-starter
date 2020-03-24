$(document).ready(() => {
  $.get('getStudents', (data, status) => {
    console.log(data)
    
    var studentListContainer = $('#studentList')

    data.forEach((item, i) => {
      var rowDiv = document.createElement('div')
      var imgCol = document.createElement('div')
      var nameCol = document.createElement('div')

      var img = document.createElement('img')
      var nameHeading = document.createElement('h4')
      var idnum = document.createElement('p')

      $(rowDiv).addClass("row student")
      $(imgCol).addClass("col-sm-2 center")
      $(nameCol).addClass("col-sm-10")

      $(img).attr("src", item.img)
      $(nameHeading).text(item.name)
      $(idnum).text(item.id)

      imgCol.append(img)
      nameCol.append(nameHeading)
      nameCol.append(idnum)

      rowDiv.append(imgCol)
      rowDiv.append(nameCol)

      studentListContainer.append(rowDiv)
    })

    $('#addStudent').click(() => {
      var
    })
  })
})