import React from 'react'

export default function TextForm(props) {
  return (
    <><form>
    <div class="mb-3">
      <label for="myBox" class="form-label">{props.heading}</label>
      <textarea class="form-control" id="myBox" rows = "3"></textarea>
     
      </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form></>
  )
}
