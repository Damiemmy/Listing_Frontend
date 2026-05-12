<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family: "Poppins", sans-serif;
    }

    body{
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:
      linear-gradient(
        135deg,
        #ffe5ec,
        #f3d9ff,
        #dbeafe
      );
      overflow:hidden;
      padding:20px;
    }

    .glow{
      position:absolute;
      width:350px;
      height:350px;
      border-radius:50%;
      background:rgba(255,255,255,0.2);
      filter:blur(100px);
      animation: float 6s ease-in-out infinite;
    }

    .glow:nth-child(1){
      top:-80px;
      left:-80px;
    }

    .glow:nth-child(2){
      bottom:-80px;
      right:-80px;
      animation-delay:2s;
    }

    @keyframes float{
      0%,100%{
        transform:translateY(0px);
      }
      50%{
        transform:translateY(20px);
      }
    }

    .container{
      position:relative;
      width:100%;
      max-width:520px;
      background:rgba(255,255,255,0.75);
      backdrop-filter:blur(25px);
      border:1px solid rgba(255,255,255,0.3);
      border-radius:40px;
      padding:50px 40px;
      box-shadow:
      0 15px 50px rgba(0,0,0,0.12);
      text-align:center;
      z-index:10;
    }

    .logo{
      width:75px;
      height:75px;
      margin:auto;
      margin-bottom:25px;
      border-radius:25px;
      background:linear-gradient(
        135deg,
        #ff2d75,
        #9333ea
      );
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:34px;
      color:white;
      font-weight:bold;
      box-shadow:0 10px 30px rgba(255,45,117,0.4);
    }

    h1{
      font-size:42px;
      color:#111827;
      margin-bottom:15px;
      font-weight:800;
    }

    p{
      color:#6b7280;
      font-size:17px;
      line-height:1.8;
      margin-bottom:35px;
    }

    .email{
      color:#ff2d75;
      font-weight:700;
    }

    .btn{
      display:inline-block;
      text-decoration:none;
      background:linear-gradient(
        135deg,
        #ff2d75,
        #9333ea
      );
      color:white;
      padding:18px 40px;
      border-radius:18px;
      font-size:17px;
      font-weight:700;
      transition:0.4s ease;
      box-shadow:
      0 10px 30px rgba(255,45,117,0.35);
    }

    .btn:hover{
      transform:translateY(-4px) scale(1.03);
      box-shadow:
      0 15px 40px rgba(147,51,234,0.4);
    }

    .footer{
      margin-top:35px;
      font-size:14px;
      color:#9ca3af;
      line-height:1.7;
    }

    .mini-card{
      margin-top:35px;
      background:white;
      padding:18px;
      border-radius:20px;
      box-shadow:0 8px 20px rgba(0,0,0,0.06);
    }

    .mini-card h3{
      color:#111827;
      margin-bottom:10px;
      font-size:18px;
    }

    .mini-card p{
      margin:0;
      font-size:14px;
    }

    @media(max-width:600px){

      .container{
        padding:40px 25px;
      }

      h1{
        font-size:32px;
      }

      p{
        font-size:15px;
      }

      .btn{
        width:100%;
      }
    }
  </style>
</head>

<body>

  <div class="glow"></div>
  <div class="glow"></div>

  <div class="container">

    <div class="logo">
      BM
    </div>

    <h1>Verify Your Email ✨</h1>

    <p>
      Welcome to <strong>Book Me</strong>.
      Your travel experience is almost ready.
      Please verify your email address
      <span class="email">
        {{ $json.body.email }}
      </span>
      to unlock bookings, favorites, trips and hosting features.
    </p>

    <a
      href="{{ $json.body.verification_link }}"
      class="btn"
    >
      Verify My Account
    </a>

    <div class="mini-card">
      <h3>🌍 Your Travel World Awaits</h3>

      <p>
        Discover beautiful stays, manage reservations,
        become a host and explore experiences
        built for modern travelers.
      </p>
    </div>

    <div class="footer">
      If you did not create this account,
      you can safely ignore this email.
      <br><br>
      © 2026 Book Me — Airbnb Inspired Platform
    </div>

  </div>

</body>
</html>