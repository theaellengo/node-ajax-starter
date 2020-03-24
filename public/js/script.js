$(document).ready(() => {

  function addStudentDiv(item, parentDiv) {
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

      parentDiv.append(rowDiv)
  }

  $.get('getStudents', (data, status) => {
    var studentListContainer = $('#studentList')

    data.forEach((item, i) => {
      addStudentDiv(item, studentListContainer)
    })

    $('#addStudent').click(() => {
      var name = $('#name').val()
      var idnum = $('#idnum').val()
      var gender = $("input[name='gender']:checked").val()

      var newStudent = {
        name: name,
        id: idnum,
        gender: gender
      }

      $.post('addStudent', newStudent, (data, status) => {
        var studentListContainer = $('#studentList')
        addStudentDiv(data, studentListContainer)
      })

    })
  })
})