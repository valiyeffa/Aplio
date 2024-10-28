import React from 'react'

const Card = (props) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="box">
                <div className="box-border">
                    <div class="box-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-cast frs">
                            <path
                                d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6">
                            </path>
                            <line x1="2" y1="20" x2="2.01" y2="20"></line>
                        </svg>
                        <h4>{props.ptitle}</h4>
                        <p>Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.
                        </p>

                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card