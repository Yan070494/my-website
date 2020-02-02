import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div class="skillbars">
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>HTML</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer blue-back">
            <div class="progressBarValue blue-bar  value-90"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>PHP</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer purple-back">
            <div class="progressBarValue value-80 purple-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>SQL</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer orange-back">
            <div class="progressBarValue value-70 orange-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>Javascript</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer red-back">
            <div class="progressBarValue value-70 red-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>Python</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer yellow-back">
            <div class="progressBarValue value-60 yellow-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>MongoDB</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer green-back">
            <div class="progressBarValue value-50 green-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered">
      <div className="column is-2 is-paddingless has-text-centered">
        <p>C#</p>
      </div>
      <div className="column is-10">
        <div class="progressBar">
          <div class="progressBarContainer cyan-back">
            <div class="progressBarValue value-30 cyan-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
