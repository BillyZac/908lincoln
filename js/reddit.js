var section = document.getElementById('posts')
var global
var request = new XMLHttpRequest

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status === 200) {
    var response = JSON.parse(this.responseText)
    global = response
    for (var i=1; i<20; i++) {
      // Create post div
      var post = document.createElement('div')
      post.className = "post"

      // Thumbnail
      var thumbURL = response.data.children[i].data.thumbnail
      var newPic = document.createElement('img')
      newPic.className = 'thumb'
      newPic.src = thumbURL
      post.appendChild(newPic)

      // Score
      var score = global.data.children[i].data.score
      var newScore = document.createElement('span')
      newScore.className = 'score'
      newScore.innerText = score
      post.appendChild(newScore)

      // Title
      var title = global.data.children[i].data.title
      if (title.length > 15) {
        title = title.substring(0, 15) + '...'
      }
      var newTitle = document.createElement('span')
      newTitle.className = 'title'
      newTitle.innerText = title
      post.appendChild(newTitle)

      // Add post to section
      section.appendChild(post)

    }
  }
}

request.open('GET', 'https://www.reddit.com/r/gifs.json')
request.send()
