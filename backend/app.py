from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/resources", methods=["GET"])
def get_resources():
    return jsonify({"data": [{"name": "Water Fountain", "lat": 40.7128, "lng": -74.0060}]})

if __name__ == "__main__":
    app.run(debug=True)
