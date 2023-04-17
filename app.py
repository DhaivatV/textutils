from flask import Flask, request, jsonify, send_file
import cv2 
from flask_cors import CORS 
import numpy as np
import base64

app = Flask(__name__)
CORS(app)

@app.route('/segment', methods=['POST'])
def segment_image():
    # check if the post request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    
    # check if the file is valid
    if not file or file.filename == '':
        return jsonify({'error': 'Invalid file'}), 400
    
    # read the image from the file
    image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_UNCHANGED)

    # perform the segmentation using the OpenCV code you provided
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (7, 7), 0)
    thresh = cv2.adaptiveThreshold(blurred, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 17, 3)
    
    # encode the segmented image as a byte string
    _, encoded_image = cv2.imencode('.jpg', thresh)
    
    # convert the byte string to a base64-encoded string
    base64_image = base64.b64encode(encoded_image).decode('utf-8')
    
    # return the base64-encoded image
    return jsonify({'image': base64_image})

if __name__ == '__main__':
    app.run(debug=True)
