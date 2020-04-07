import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
         
            <div>
            <div id="breadcrumb">
              <div className="container">	
                <div className="breadcrumb">							
                  <li><a href="index.html">Home</a></li>
                  <li>Contact</li>			
                </div>		
              </div>	
            </div>
            <div className="map">
              <iframe src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Kuningan,+Jakarta+Capital+Region,+Indonesia&aq=3&oq=kuningan+&sll=37.0625,-95.677068&sspn=37.410045,86.572266&ie=UTF8&hq=&hnear=Kuningan&t=m&z=14&ll=-6.238824,106.830177&output=embed">
              </iframe>
            </div>
            <section id="contact-page">
              <div className="container">
                <div className="center">        
                  <h2>Drop Your Message</h2>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div> 
                <div className="row contact-wrap"> 
                  <div className="status alert alert-success" style={{display: 'none'}} />
                  <form id="main-contact-form" className="contact-form" name="contact-form" method="post" action="sendemail.php">
                    <div className="col-sm-5 col-sm-offset-1">
                      <div className="form-group">
                        <label>Name *</label>
                        <input type="text" name="name" className="form-control" required="required" />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input type="email" name="email" className="form-control" required="required" />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="number" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" />
                      </div>                        
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Subject *</label>
                        <input type="text" name="subject" className="form-control" required="required" />
                      </div>
                      <div className="form-group">
                        <label>Message *</label>
                        <textarea name="message" id="message" required="required" className="form-control" rows={8} defaultValue={""} />
                      </div>                        
                      <div className="form-group">
                        <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Submit Message</button>
                      </div>
                    </div>
                  </form> 
                </div>{/*/.row*/}
              </div>{/*/.container*/}
            </section>{/*/#contact-page*/}
            <footer>
              <div className="footer">
                <div className="container">
                  <div className="social-icon">
                    <div className="col-md-4">
                      <ul className="social-network">
                        <li><a href="#" className="fb tool-tip" title="Facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" className="twitter tool-tip" title="Twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="gplus tool-tip" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="linkedin tool-tip" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="#" className="ytube tool-tip" title="You Tube"><i className="fa fa-youtube-play" /></a></li>
                      </ul>	
                    </div>
                  </div>
                  <div className="col-md-4 col-md-offset-4">
                    <div className="copyright">
                      © June  2015 by <a target="_blank" href="http://bootstraptaste.com/" title="Free Twitter Bootstrap WordPress Themes and HTML templates">Bootstrap Themes</a>. All Rights Reserved.
                    </div>
                    {/* 
                            All links in the footer should remain intact. 
                            Licenseing information is available at: http://bootstraptaste.com/license/
                            You can buy this theme without footer links online at: http://bootstraptaste.com/buy/?theme=Company
                        */}
                  </div>						
                </div>
                <div className="pull-right">
                  <a href="#home" className="scrollup"><i className="fa fa-angle-up fa-3x" /></a>
                </div>
              </div>
            </footer>
          </div>
          

        )
    }
}

export default Contact