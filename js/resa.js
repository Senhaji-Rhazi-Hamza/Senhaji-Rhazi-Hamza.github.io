weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Board(weekday, rangehours) {
  //weekdays = ["","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  board = $('<table></table>').attr({
    id: "board"
  });

  var row = $('<tr>').attr('id', "0")
  row.appendTo(board)
  var th = $('<th>').attr({id: board.attr('id') + "00"})
  th.appendTo(row)
  for (j = 1; j < weekday.length + 1; j++){
    var th = $('<th>').attr({id: board.attr('id') + "0" + j.toString()});
    th.html(weekday[j - 1])
    th.appendTo(row)
  }
  for (i = 1; i < rangehours.length + 1; i++){
    var row = $('<tr>').attr('id', i.toString())

    var td = $('<td>').attr({id:board.attr('id') + i.toString() + "0"})
    td.html(rangehours[i - 1])
    td.appendTo(row)

    for (j = 1; j < weekday.length + 1; j++) {
      td = $('<td>').attr({id: board.attr('id') + i.toString() + j.toString()});
      // btn = $('<button>').attr({
      //   id: 'b' + i.toString() + j.toString()
      // });
      // td.append(btn)
      td.appendTo(row)
    }
    row.appendTo(board)
  }
  board.addClass('table table-bordered')
  console.log("sucefully return")
  return board
};
function changeColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color','green');
}
function say_hi()
{
  console.log("Hello world")
}
