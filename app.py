from flask import Flask, request
import json
app = Flask(__name__)
ydl_opts = {}
@app.route('/link', methods=['POST'])
def links():
    link = json.loads(request.data)
    link=link['url']
    ytdl="%s" % link
    with open("links.txt", "a") as myfile:
        myfile.write(ytdl+"\n")
    return link
