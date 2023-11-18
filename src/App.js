import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CCcss/App.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([{}]);
  const [page] = useState(1);
  const [loader, setLoader] = useState(1);
  const [showReplies, setShowReplies] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [replyInput, setReplyInput] = useState('');
  const [isWritingComment, setIsWritingComment] = useState(false);
  const navigate = useNavigate();
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://hyeumine.com/forumGetPosts.php?page=${page}`)
      .then(response => {
        if (!(response.status === 200 && response.statusText === "OK")) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then(data => {
        setPosts(data);
        const initialShowRepliesState = data.map(() => false);
        setShowReplies(initialShowRepliesState);
        const initialVisibleState = data.map(() => false);
        setVisiblePosts(initialVisibleState);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [page, loader]);

  async function setReply(postid) {
    try {
      await axios.post(`http://hyeumine.com/forumReplyPost.php`, {
        user_id: user.id,
        post_id: postid,
        reply: replyInput
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setReplyInput('');
      setLoader(Math.random() * 1000);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  async function handlePostComment() {
    try {
      await axios.post(`http://hyeumine.com/forumNewPost.php`, {
        id: user.id,
        post: document.getElementById("postni").value
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoader(Math.random() * 1000);
      setIsWritingComment(false);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  const handleNextPost = () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
    }
  };

  const handlePreviousPost = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/app');
  };

  const handleHome = () => {
    setUser(null);
    navigate('/home');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className='name'>
            <h3>Forum: My Own Touch</h3>
          </div>
          <div className='homebut' onClick={handleHome} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              Home
            </Typography>
          </div>
          <div className='about' onClick={handleAbout} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              About
            </Typography>
          </div>
          <div className='contact' onClick={handleContact} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              Contact
            </Typography>
          </div>
          <div className='logout' onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <Typography variant="button">
              Logout
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
  
      {user === null ?
        <>
          <div className='containerlogin'>
            <div className='user'>
            <input type="text" id="nuname" placeholder="Enter your username"style={{ width: '200px', height: '20px' }}/>
            </div>
            <div className='pass'>
              <input type="password" id="npword"  placeholder="Enter your password" style={{ width: '200px', height: '20px' }}/>
            </div>
            <Button onClick={() => {
              axios.post(`http://hyeumine.com/forumLogin.php`, {
                username: document.getElementById("nuname").value,
                password: document.getElementById("npword").value
              }, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
                .then(response => {
                  if (!(response.status === 200 && response.statusText === "OK")) {
                    throw new Error('Network response was not ok');
                  }
                  return response.data.user;
                })
                .then(us => {
                  setUser(us);
                })
                .catch(error => {
                  console.error('There was a problem with the fetch operation:', error);
                });
            }}>Login User</Button>
            <div className='createuser'>
            <div className='user'>
              <input type="text" id="uname" placeholder="Create your username" style={{ width: '200px', height: '20px' }}/>
            </div>
            <div className='pass'>
              <input type="password" id="pword" placeholder="Create your password" style={{ width: '200px', height: '20px' }}/>
            </div>
            </div>
            <Button onClick={() =>
            {
              axios.post(`http://hyeumine.com/forumCreateUser.php`, {
                username: document.getElementById("uname").value,
                password: document.getElementById("pword").value
              }, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
                .then(response => {
                  if (!(response.status === 200 && response.statusText === "OK")) {
                    throw new Error('Network response was not ok');
                  }
                  return response.data;
                })
                .then(us => {
                  setUser(us);
                })
                .catch(error => {
                  console.error('There was a problem with the fetch operation:', error);
                });
            }}>Create User</Button>
          </div>
        </> :
        <>
          <br></br>
          <div className='info'>
            ID: {user.id} | {user.username}
          </div>
          <br></br>
          {isWritingComment ? (
            <div className='postni'>
              <textarea id="postni"></textarea>
              <div className='postapost'>``
                <Button variant='contained' onClick={handlePostComment}>Post</Button>
              </div>
            </div>
          ) : (
            <Button variant='contained' onClick={() => setIsWritingComment(true)}>Write a comment</Button>
          )}
        </>
      }
      <br></br>
      <div className="navigation-buttons">
      <div className='post-container'>
        {posts.length > 0 && currentPostIndex >= 0 && currentPostIndex < posts.length && (
          <div className='post' key={currentPostIndex}>
            <Button variant='contained' color="error" style={{ fontSize: "8px" }} onClick={() => {
              axios.get(`http://hyeumine.com/forumDeletePost.php?id=${posts[currentPostIndex].id}`)
                .then(response => {
                  if (!(response.status === 200 && response.statusText === "OK")) {
                    throw new Error('Network response was not ok');
                  }
                  return response.data;
                })
                .then(message => {
                  setLoader(Math.random() * 1000);
                })
                .catch(error => {
                  console.error('There was a problem with the fetch operation:', error);
                });
            }}>X</Button>
            <h2>{posts[currentPostIndex].post}</h2>
            <h5>{posts[currentPostIndex].user}</h5>
            <div className='replyni'>
              <input type='text' id="replyni" value={replyInput} onChange={(e) => setReplyInput(e.target.value)} />
            </div>
            <br></br>
            <div className='reply'>
              <Button variant="contained" onClick={() => setReply(posts[currentPostIndex].id)}>Reply</Button>
            </div>
            <br></br>
            <Button
              variant="outlined"
              onClick={() => {
                const updatedVisiblePosts = [...visiblePosts];
                updatedVisiblePosts[currentPostIndex] = !visiblePosts[currentPostIndex];
                setVisiblePosts(updatedVisiblePosts);
              }}
            >
              {visiblePosts[currentPostIndex] ? 'Hide Replies' : 'View Replies'}
            </Button>

            <div className='divhidden' style={{ display: visiblePosts[currentPostIndex] ? 'block' : 'none' }}>
              {posts[currentPostIndex].reply ? (
                posts[currentPostIndex].reply.map((reply, replyId) => (
                  <Paper key={replyId} style={{ margin: '10px', padding: '5px' }}>{reply.reply}</Paper>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
      <br></br>
      <div className='prevnextcontainer'>
        <Button className='glow-on-hover' variant='outlined' onClick={handlePreviousPost} disabled={currentPostIndex === 0}>
          Previous
        </Button>
        {' '} 
        <Button className='glow-on-hover1' variant='outlined' onClick={handleNextPost} disabled={currentPostIndex === posts.length - 1}>
          Next
        </Button>
      </div>
    </div>
  </div>
);
}

export default App;
