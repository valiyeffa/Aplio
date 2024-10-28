import React from 'react'
import Card from './Card'

const Sponsor = () => {
  return (
    <main>
      <div className="container">
        <div className="first-sect">
          <h2>The world's best companies <br /> trust aplio.</h2>
          <span>Trusted by thousands of companies across 50+ countries</span>

          <div className="sponsor-icons-sect">
            <div className="row">
              <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                <div className="sponsor-icons">
                  <a href="#"><img src="https://aplio.vercel.app/images/clients/axeptio.svg" alt="" /></a>
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                <div className="sponsor-icons">
                  <a href="#"><img src="https://aplio.vercel.app/images/clients/artifact.svg" alt="" /></a>
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                <div className="sponsor-icons">
                  <a href="#"><img src="https://aplio.vercel.app/images/clients/caudile.svg" alt="" /></a>
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                <div className="sponsor-icons">
                  <a href="#"><img src="https://aplio.vercel.app/images/clients/mfinity.svg" alt="" /></a>
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                <div className="sponsor-icons">
                  <a href="#"><img src="https://aplio.vercel.app/images/clients/infinity.svg" alt="" /></a>
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                <div className="sponsor-icons">
                  <a href="#"><img src="https://aplio.vercel.app/images/clients/group.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>


          <button className='start-btn'>Start your Journey</button>
        </div>

        <div className="second-sect">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="services-text">
                <span>OUR SERVICES</span>
                <h1>The world's best companies <br />
                  trust aplio.</h1>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="services-text">
                <p>Until recently, the prevailing view assumed lorem ipsum was born as a <br /> nonsense text. It's not Latin, though it looks like it</p>
              </div>
            </div>
          </div>

          <div class="row">
            <Card ptitle={'Investment Banks'} />
            <Card ptitle={'Scales & Trading'} />
            <Card ptitle={'Mortgage Loans'} />
            <Card ptitle={'Finance Analysis'} />
            <Card ptitle={'Increased Efficiency'} />
            <Card ptitle={'Fundraising Advice'} />
          </div>
        </div>
      </div>

      <div className="thrd-sect">
        <div className="members-count container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="services-text">
                <span>Data Integrations</span>
                <h1>A strong vision is crucial for the analysis of wealth.</h1>
                <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before & After magazine.</p>
                <ul>
                  <li>Guided Payment Procurement</li>
                  <li>Guided Payment Procurement</li>
                  <li>Guided Payment Procurement</li>
                </ul>
                <button className='start-btn'>Start Your Journey</button>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="images">
                <img src="https://aplio.vercel.app/images/vision/vision-image.png" alt="" />
                <img src="https://aplio.vercel.app/images/vision/vision-image-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Sponsor