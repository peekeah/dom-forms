const element = document.createElement('div');
element.setAttribute('class', 'container mx-auto col-10 col-lg-8 col-xl-6 my-5 py-5 px-lg-5 bg-dark text-light');

element.innerHTML = `
  <form id="form" method="post" action="#">
          <div class="form-group">
            <div class="table-wrapper container">
              <table class="table">
                <thead>
                  <h1 id="title" class="text-center">Sign Up</h1>
                  <p id="description" class="text-center">
                    DOM manipulation using forms
                  </p>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label for="first-name">First Name</label>
                    </td>
                    <td>
                      <input
                        class="form-control"
                        id="first-name"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="last-name">Last Name</label>
                    </td>
                    <td>
                      <input
                        class="form-control"
                        type="text"
                        id="last-name"
                        placeholder="Last Name"
                        name="lastname"
                        required
                      />
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>
                      <label id="gender" for="gender">Gender</label>
                    </td>
                    <td>
                      <div class="d-flex flex-column gap-0 gap-sm-3 flex-sm-row">
                        <span>
                        <input
                          class="form-check-input mx-2"
                          type="radio"
                          name="gender"
                          value="male"
                        />Male
                      </span>
                      <span>
                        <input
                          class="form-check-input mx-2"
                          type="radio"
                          name="gender"
                          value="female"
                        />Female
                      </span>
                      </div>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="email">Email</label>
                    </td>
                    <td>
                      <input
                        class="form-control"
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="address">Address</label>
                    </td>
                    <td>
                      <textarea
                        class="form-control"
                        id="address"
                        rows="4"
                        cols="21"
                        placeholder="Address"
                        required
                      >
                      </textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="pincode">Pincode</label>
                    </td>
                    <td>
                      <input
                        class="form-control"
                        id="pincode"
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        required
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label for="food">Choice of Food</label>
                    </td>
                    <td>
                      <select name="food" id="food" class="form-select">
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
                      <input
                        class="form-control"
                        type="text"
                        id="state"
                        name="state"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="country">Country</label>
                    </td>
                    <td>
                      <input class="form-control" id="country" name="country" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="button-container d-flex gap-3 justify-content-center">
                <button
                  type="button"
                  onclick="displayData()"
                  id="submit"
                  class="btn btn-primary my-3"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  id="submit"
                  class="btn btn-danger my-3"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
`;

document.body.appendChild(element);


const displayData = () => {
  data = {
    firstname: document.querySelector("#first-name").value,
    lastname: document.querySelector("#last-name").value,
    email: document.querySelector("#email").value,
    gender: document.querySelector(
      "input[type='radio'][name='gender']:checked"
    )?.value,
    address: document.querySelector("#address").value,
    pincode: document.querySelector("#pincode").value,
    food: document.querySelector("#food").value,
    state: document.querySelector("#state").value,
    country: document.querySelector("#country").value,
  };
  console.log(data);
  document.getElementById("form").reset()
};