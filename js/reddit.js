// var section = document.getElementById('posts')
var globalTitle
var request = new XMLHttpRequest
var globalResponse

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status === 200) {
    var response = JSON.parse(this.responseText)
    globalResponse = response
    for (var i=1; i<20; i++) {

      // Title
      var title = response.data.children[i].data.title
      if (title.length > 15) {
        title = title.substring(0, 15) + '...'
      }
      var newTitle = document.createElement('span')
      newTitle.className = 'title'
      newTitle.innerText = title
      console.log(title)
      globalTitle = title
    }
  }
}

request.open('GET', 'https://www.reddit.com/r/gifs.json')
request.send()
