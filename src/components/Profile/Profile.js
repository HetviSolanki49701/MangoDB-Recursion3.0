import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./Profile.css";
import pfp from '../../images/pfp.png'

function Profile() {
  return (
    <div>
      <Header />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center mb-4">
                    <img
                      className="mr-3"
                      src={pfp}
                      width="80"
                      height="80"
                      alt=""
                    />
                    <div className="media-body">
                      <h3 className="mb-0">Jay Jain</h3>
                      <p className="text-muted mb-0">Mumbai, India</p>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col">
                      <div className="card card-profile text-center">
                        <span className="mb-1 text-primary">
                          <i className="icon-people"></i>
                        </span>
                        <h3 className="mb-0">280</h3>
                        <p className="text-muted px-4">Following</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-profile text-center">
                        <h3 className="mb-0">240</h3>
                        <p className="text-muted">Followers</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-profile text-center">
                        <h3 className="mb-0">200</h3>
                        <p className="text-muted">Score</p>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-danger px-5">
                        Follow Now
                      </button>
                    </div>
                  </div>

                  <h4>About Me</h4>
                  <p className="text-muted">
                    Hi, I'm Jay Jain. Working as a developer
                  </p>
                  <ul className="card-profile__info">
                    <li className="mb-1">
                      <strong className="text-dark mr-4">Mobile</strong>{" "}
                      <span>+91 9867466628</span>
                    </li>
                    <li>
                      <strong className="text-dark mr-4">Email</strong>{" "}
                      <span>avish@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <form action="#" className="form-profile">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="2"
                        placeholder="Tell us something about yourself"
                      ></textarea>
                    </div>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-primary px-3 ml-4">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-0">
                    <h4 class="card-title px-4 mb-3">Todo</h4>
                    <div class="todo-list">
                      <div class="tdl-holder">
                        <div class="tdl-content">
                          <ul id="todo_list">
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Revise Insertion Sort</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Kruskal's Algorithm</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Classify Data Structures</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <span>Implement DEQueue</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div class="px-4">
                          <input
                            type="text"
                            class="tdl-new form-control"
                            placeholder="Write new item and hit 'Enter'..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row hetviclasshetvi">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body data-table">
                  <div class="active-member">
                    <div class="table-responsive">
                      <table class="table table-xs mb-0">
                        <thead>
                          <tr>
                            <th>Courses</th>
                            <th>Quiz</th>
                            <th>Difficulty</th>
                            <th>Status</th>
                            <th>Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sorting Algorithms</td>
                            <td>2/4</td>
                            <td>
                              <span>Easy</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Trees</td>
                            <td>3/4</td>
                            <td>
                              <span>Easy</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">50 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Queues</td>
                            <td>Not Attempted</td>
                            <td>
                              <span>Medium</span>
                            </td>
                            <td>Incompleted</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Graph</td>
                            <td>4/4</td>
                            <td>
                              <span>Medium</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Stacks</td>
                            <td>2/4</td>
                            <td>
                              <span>Difficult</span>
                            </td>
                            <td>Completed</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Hash</td>
                            <td>Not Attempted</td>
                            <td>
                              <span>Difficult</span>
                            </td>
                            <td>Incompleted</td>
                            <td>
                              <span>Last Login</span>
                              <span class="m-0 pl-3">10 days ago</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classname="footerrrrrrrrrr" style={{transform: 'translate(0%, -270%)'}}>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
