import React from 'react'

export default () => (
  // Ancestor tile
  <div class="tile is-ancestor">
    {/* First tile group */}
    <div class="tile is-4 is-vertical">
      {/* Top tile group */}
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h2 class="title">Yanis Abounacer</h2>
          <p>25 ans</p>

          <div class="columns">
            <div class="column">
              <p>LinkedIn</p>
            </div>
            <div class="column">
              <p>Facebook</p>
            </div>
            <div class="column">
              <p>Twitter</p>
            </div>
          </div>
        </article>
      </div>
      {/* Bottom tile group */}
      <div class="tile">
        <div class="tile ">
          {/* Left vertical group */}
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <p>Call me !</p>
            </article>
            <article class="tile is-child box">Write me !</article>
          </div>
          {/* Right vertical group */}
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <p>Anglais</p>
            </article>
            <article class="tile is-child box">
              <p>Allemand</p>
            </article>
          </div>
        </div>
      </div>
    </div>
    {/* Second tile group */}
    <div class="tile is-4 is-parent is-vertical">
      {/* Top tile */}
      <article class="tile box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41725.392770790546!2d-0.40727831329921593!3d49.18467865755685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a42bd4c04c933%3A0x3da5749f30d00859!2s14000%20Caen!5e0!3m2!1sfr!2sfr!4v1577974165510!5m2!1sfr!2sfr"
          width="600"
          height="300"
          frameborder="1"
          allowfullscreen=""
          title="Caen"
        ></iframe>
      </article>
      {/* Bottom tile */}
      <article class="tile box">
        <img
          src="https://rfclipart.com/image/big/c2-fc-cf/abstract-futuristic-background-with-squares-Download-Royalty-free-Vector-File-EPS-94342.jpg"
          alt="tech"
        />
      </article>
    </div>
    {/* Third tile group */}
    <div class="tile is-4 is-vertical">
      {/* Top tile group */}
      <div class="tile ">
        {/* Left vertical tile group */}
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p>Chant</p>
          </article>
          <article class="tile is-child box">
            <p>Cubase</p>
          </article>
        </div>
        {/* Right vertical tile group */}
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p>Piano</p>
          </article>
          <article class="tile is-child box">
            <p>Solfège</p>
          </article>
        </div>
      </div>
      {/* Bottom tile */}
      <div class="tile is-parent">
        <article class="tile is-child box">
          <img
            src="http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcSlaAhvtwX6qZpRiQMaU08E9MGb12uG6OebQ0Zh1xQ7RYupSc91TT.OmjGmIcieZt.IaYibpMedLpIP8VyRK5YYQ50.zx7lnjd8wujZAcYv06JzWguSwsLJeUouvlUohuqSxbOshA2YbEkTnp8n4PWCkevqohMeENSFQMWiB5ZDg-&format=png&w=300&h=300"
            alt="FH3"
          />
        </article>
      </div>
    </div>
  </div>
)
