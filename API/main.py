from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'Waguan, welcome to my API!'

@app.route("/user")
def get_user():
  user = [{
    "name": "John",
    "address": "KG 23 St",
    "phone": "0788 975 642"
  }, {
    "name": "Jane",
    "address": "KG 20 St",
    "phone": "0788 975 641"
  }]
  extra = request.args.get('extra')
  if extra:
    user['extra'] = extra

  return jsonify(user), 200

if __name__ == '__main__':
  app.run(debug=True)
