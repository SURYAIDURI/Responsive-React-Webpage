import React from 'react';
import SignUpForm from './SignUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { Navbar } from 'react-bootstrap';

function App() {
  const logoUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAMAAAC9ZjJ/AAAA8FBMVEX///+iWf//cmLyTh4Kz4MavP79blv0Uij/a1qhVv+ucv8A0n5K1ZPp+fHxRAD07f9It6f1jnsAuP7/oZn0TQTgUnL/m5H3/P8AzX3ySxidTv/7+f+/k//0/Pjg8/8AyXD96uf/Xkr/gXP82dP/xL/+9/b0blDw5/+bSP+B0v7Orv+W2/+7i/+YQv9tzf6xef9VyP7eyf+45f+qav+/3P91w/9avP9Btv+ZZv/Q7v5f2J6n6MZ23ar6y8P5ubH/rKXxKwDzYEb0eWLyVjT/1MPodYP/oY3ii5Hhl53TuP/J99dmxbBowLXM8d+47NKT4rmaJkLSAAADEklEQVR4nO3Ya3PSQBSA4TRKBEyqBKVbruGmpSi04K0QKNQLVgX+/78xgSKQ7FlmcHb3dOa8X9thntlLshvDoCiKoiiKoiiKoiiKoijqEeaNxtlMpGyk28aoqYOWmZ7GOk/Gq2U95bTJ6fmTWM8sM16yqpZXn57GZRAu4NXq6mwN3qgJcKaVHKmy1SeADcSZZlXR2HlTyCbAWTVPCS7DX29inJnMqbB5E9AmwplVTwHuDpxUMS6ZkW/zvh6JM01POm4Mr7gDuGRDOi57PO5Wtq15dzwuJ/sM0HwjWHJinFWTjoOfwAc3hHwc6pHDvOZQ71bczznUbwjU79bgqHkcruopwBm1485zWRU20aoT4BSdhFHfIXDfvnDfW3Hf+I2HbyWvIkW+lViWlm8lK9638ffXkXLbfuRms9nPRl3HVybj7X36JFIq/WLz13LvKrHqql1WTyvmL1IgrtxJuImHXLelmHeZykdlO7j2lraurZBWePeeQ9vgzjoRWjB6nTNluC5v2DY4ji1ceqpsxQu+bY3j2hJuS43tGhi3Na7HtQW6ngpbIR/bpTu4Mp8W6lQsu0toUle4NjBwAU7Bli30wYELceDABXtC/tBdw7YA90GAS8hfdYJZPUl1PwpsCua1CO7VcOQ+iXAd2bZCVzSt/c+iaZW+6AppEe4L4WAc5mlFvSFwP0pQP4RRv75Qv/hxH5lQHzZxH9NxX3BwXw1RX6qNg58jWq7GzxEh776fipTvbz/ktAJVIHR1fMgJcn4Nf7/c709p9x/KNzdaYAHNtxl7Hsl29GD2c/wKexoPBW5u82g4cAvGt2HAzSt8GgacY0M2BDgfmFMMOAecVAS4ATxw2nEOTNOPGwoGTjtuiRhXEi057TjgxUW4x40TrTk2KB3+BZmJdivz9dqEzzk21IwTvSGY7ler4N3KBrptgqMmm+u2wec57dshzIEeddpXXNici8MwqWG82xdb6FZtit1bmY1k3ML2b/ys4qNYb/9afStZZyOjhTmLxdL3l8MFPhpFURRFURRFURRFURRFUf/dX4+xe1BI284mAAAAAElFTkSuQmCC';

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">
          <img
            src={logoUrl}
            alt="Your Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
       
      </Navbar>
      <SignUpForm />
    </div>
  );
}

export default App;
