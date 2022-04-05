from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/todos")
def hello_world():
    data = [
        {
            "id": 1,
            "content": "阅读书籍",
            "completed": False
        },
        {
            "id": 2,
            "content": "写基于Vue3开发Todo List的文章",
            "completed": True
        },
        {
            "id": 3,
            "content": "看电影",
            "completed": False
        },
    ]
    return jsonify(data)


if __name__ == '__main__':
    app.run(port=8000)