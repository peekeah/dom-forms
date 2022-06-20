const form = document.createElement('form');
form.setAttribute('id', 'form');

form.innerHTML = `
<h1 id="title">DOM manipulation using forms</h1>
<p id="description">DOM manipulation using forms</p>
<form id="form" method="post" action="#">
<div class="form-group">
    <div class="table-wrapper container">
        <table class="table">
          <tr>
            <td>
              <label for="first-name">First Name</label>
            </td>
            <td>
              <input class="form-control" id="first-name" type="text" placeholder="First Name"required/>
            </td>
          </tr>
          <tr>
            <td>
              <label for="last-name">Last Name</label>
            </td>
            <td>
              <input class="form-control" type="text" id="last-name" placeholder="Last Name" name="lastname" required/>
            </td>
          </tr>
          <tr>
          <tr>
            <td>
              <label id="gender" for="gender">Gender</label>
            </td>
            <td>
              <input class="form-control" type="radio" name="gender"/>Male
              <input class="form-control" type="radio" name="gender"/>Female
            </td>
          </tr>
          <tr>
      
          <tr>
            <td>
              <label for="email">Email</label>
            </td>
            <td>
              <input class="form-control" type="email" id="email" placeholder="Email" required/>
            </td>
          </tr>


          <tr>
            <td>
              <label for="address">Address</label>
            </td>
            <td>
              <textarea class="form-control" id="address" rows="4" cols="21" required> </textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label for="pincode">Pincode</label>
            </td>
            <td>
              <input class="form-control" id="pincode" type="text" name="pincode" required/>
            </td>
          </tr>
          
          <tr>
            <td>
                <label for="food">Choice of Food</label>
            </td>
            <td>
                <select name="food">
                    <option>Pizza</option>
                    <option>Burger</option>
                    <option>French Fries</option>
                    <option>Chicken Roll</option>
                </select>
            </td>
          </tr>
          <tr>
              <td>
                <label for="state">State</label>
              </td>
              <td>
                <input class="form-control" type="text" name="state" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="country">Country</label>
              </td>
              <td>
                <input class="form-control" name="country" />
              </td>
            </tr>
            </table>
            <button type="submit" id="submit" class="btn btn-primary">Submit</button>
        </div>
        </div>
        </form>
`;


document.body.appendChild(form);