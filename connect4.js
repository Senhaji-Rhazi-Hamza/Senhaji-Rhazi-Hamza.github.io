function createTable2(height, width) {
  var table = $('<table></table>').attr({
    id: "basicTable"
  });

  for (i = 0; i < height; i++) {
    var row = $('<tr>')
    row.attr('id', i.toString())

    for (j = 0; j < width; j++) {
      td = $('<td>').attr({
        id: i.toString() + j.toString()
      });
      btn = $('<button>').attr({
        id: 'b' + i.toString() + j.toString()
      });
      td.append(btn)
      //  td.onclick = function(){console.log(($(this)).attr('id'))};
      //td.attr('id', i.toString() + j.toString())
      //       //td.addClass()
      //td.html("ahaha")
      td.appendTo(row)
    }
    row.appendTo(table)
  }
  table.addClass('board')
  console.log("sucefully return")
  return table
};
currentPlayer = 1
var player1
var player2

function init_players() {
  if ((typeof(player2) === "undefined") && (typeof(player1) === "undefined")) {
    player1 = prompt("Entrez votre nom, vous aurez la couleur rouge");
    player2 = prompt("Entrez votre nom, vous aurez la couleur jaune");
  }
}

function click_handler() {
  init_players()
  idx = $(this).attr('id')
  li = parseInt(idx[1])
  col = parseInt(idx[2])
  color = "red"
  btn = $('#b' + li.toString() + col.toString())
  currentPlayer *= -1
  var color
  if (currentPlayer === -1) {
    color = "rgb(255, 0, 0)"
  } else {
    color = "rgb(255, 255, 0)"
  }
  // btn.css("background-color",'red')
  //console.log(li)
  idBtnChanged = changeColorBottom(col, color)
  // btn = $("#"+idBtnChanged).hide().show(0);
  // btn.force_redraw()
  //console.log("btn changed",idBtnChanged)
  if (verticalWinCheck(idBtnChanged, color) || (horizontalWinCheck(idBtnChanged, color)) || (diagonalWinCheck(idBtnChanged, color))) {
    endGame()
  }
}
// $.fn.force_redraw = function() {
//     return this.hide( 0, function() {
//         $( this ).show();
//     } );
// }

function endGame() {
  var winner
  if (currentPlayer === 1) {
    winner = player1
  } else {
    winner = player2
  }

  alert(winner + " a gagné")
  location.reload()
}

function diagonalWinCheck(idx, color) {
  trs = $('tr')
  btn = $('#' + idx)
  //console.log(btn.css('background-color'))
  tds = btn.closest('tr').children()
  lenls = trs.length
  lencs = tds.length
  li = parseInt(idx[1])
  col = parseInt(idx[2])
//  debugger;
  binf1 =  Math.min((Math.max(col - 3, 0), Math.max(li - 3, 0)))
  //debugger;
  l1 =   li - Math.min(li, col)
  c1 =  col -  Math.min(li, col)

  bmax1 = Math.min(lencs - c1, lenls -l1)

  l2 = li - Math.min(lencs - (col + 1) , li)
  c2 = col + Math.min(lencs - (col + 1), li)
  bmax2 = Math.min(lenls - li, col)
  counter = 0
  console.log("coord filled:  (" + li + ',' +col+')')
  console.log("coord start:  (" + l2 + ',' +c2+')')
//   console.log("idx " + '#' + idx)
  console.log("bmax2 : " + bmax2)
//

// //  debugger;
  for (i = 0; i <= bmax1; i++) {
    btntmp = $('#' + 'b' + (l1 + i).toString() + (c1 + i).toString())
    //console.log(i.toString() + i.toString() + "with color" + btntmp.css('background-color'))
    if (btntmp.css('background-color') === color) {
      counter = counter + 1
  //    console.log("counter increment in diag:" + counter.toString())
      if (counter === 4) {
        return true
      }
    } else {

      counter = 0
    }
  }
  counter = 0
  for (i = 0; i <= bmax2; i++) {
    btntmp = $('#' + 'b' + (l2 + i).toString() + (c2 - i).toString())
    //console.log(i.toString() + i.toString() + "with color" + btntmp.css('background-color'))
    console.log('b' + (l2 + i).toString() + (c2 - i).toString())
    if (btntmp.css('background-color') === color) {
      counter = counter + 1
      console.log("counter increment in diag:" + counter.toString())
      if (counter === 4) {
        return true
      }
    } else {

      counter = 0
    }
  }
  return false
}

function horizontalWinCheck(idx, color) {
  trs = $('tr')
  btn = $('#' + idx)
  //console.log(btn.css('background-color'))
  tds = btn.closest('tr').children()
  lenls = trs.length
  lencs = tds.length
  li = parseInt(idx[1])
  col = parseInt(idx[2])
  binf = Math.max(col - 3, 0)
  bmax = Math.min(lencs - 1, col + 3)
  counter = 0

  for (i = binf; i <= bmax; i++) {
    btntmp = $('#' + 'b' + li.toString() + i.toString())
    if (btntmp.css('background-color') === color) {
      counter = counter + 1
      if (counter === 4) {
        return true
      }
    } else {
      counter = 0
    }
  }
  return false
}

function verticalWinCheck(idx, color) {
  trs = $('tr')
  btn = $('#' + idx)
  //console.log(btn.css('background-color'))
  tds = btn.closest('tr').children()
  lenls = trs.length
  lencs = tds.length
  li = parseInt(idx[1])
  col = parseInt(idx[2])
  binf = Math.max(li - 3, 0)
  bmax = Math.min(lenls - 1, li + 3)
  counter = 0

  for (i = binf; i <= bmax; i++) {
    btntmp = $('#' + 'b' + i.toString() + col.toString())
    // console.log("color ")
    // console.log(btntmp.css('background-color') === color)
    // console.log("for button" + 'b' + i.toString() + col.toString())
    //
    if (btntmp.css('background-color') === color) {
      counter = counter + 1
    //  console.log("counter"+ counter.toString())
      if (counter === 4) {
        return true
      }
    } else {
      counter = 0
    }
  }
  return false
}

function changeColorBottom(col, color) {
  trs = $('tr')
  console.log(trs.length)
  for (i = trs.length - 1; i >= 0; i--) {

    btn = $('#b' + i.toString() + col.toString())
    //console.log('b'+col.toString()+i.toString())
    //btn.css("background-color",'red')

    if (btn.css("background-color") == "rgb(128, 128, 128)") {
      console.log('#b' + i.toString() + col.toString())
      btn.css("background-color", color)
      return btn.attr('id')
    }
  }
}
