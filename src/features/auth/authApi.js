
export function createUser(userData){
    return new Promise(async (resolve)=>{
     const response = await fetch('http://localhost:8080/auth/signup',{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{'content-type': 'application/json'}
     });
     const data = await response.json()
     resolve({data});
    })
}

export function loginUser(loginInfo){
    return new Promise(async(resolve,reject)=>{
      try{
        console.log("somethin in loginuser")
        const response = await fetch('http://localhost:8080/auth/login',{
            method: 'POSt',
            body: JSON.stringify(loginInfo),
            headers:{'content-type':'application/json'}
        })
        if(response.ok){
            const data = await response.json();
            console.log("loginuser",data)
            resolve(data)
        }else{
            const error = await response.text()
            reject(error)
        }
      }catch(err){
        reject(err)
      }
    })
}

export function checkAuth(){
    return new Promise(async (resolve, reject) => {
     try{
        const response = await fetch('http://localhost:8080/auth/check',
            {
                method: 'GET',
                credentials: 'include', // Sends cookies with the request,
                // headers: {
                //     Authorization: `Bearer ${jwtToken}`, // Pass the token in the Authorization header
                //   }
            }
        );
        console.log("response",response)
        if(response.ok) {
            const data = await response.json();
            resolve({data})
        } else{
            const error = await response.text()
            console.log(error,"check auth error")
            reject(error)
        }
      }catch(err){
        reject(err)
      }
    })
}

export function signOut(userId) {
    return new Promise(async (resolve,reject)=>{
        try{
            const response = await fetch('http://localhost:8080/auth/logout')
            if(response.ok){
                resolve({data:'success'})
            }else{
                const error = await response.text()
                reject(error)
            }
        }catch(err){
            console.log(err)
            reject(err)
        }
    })
}

export function resetPasswordRequest(email){
    return new Promise(async(resolve, reject)=>{
        try{
            const response = await fetch('http://localhost:8080/auth/reset-password-request',{
                method:'POST',
                body: JSON.stringify({email}),
                headers: {'content-type':'application/json'},
            })
            if(response.ok){
                const data = await response.json()
                resolve(data)
            }else{
                const error = await response.text()
                reject(error)
            }
        }catch(err){
            console.log(err)
            reject(err)
        }
    })
}

export function resetPassword(data) {
    return new Promise(async (resolve, reject) => {
        try{
            const response = await fetch('http://localhost:8080/auth/reset-password',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'content-type': 'application/json'}
            })
            if(response.ok){
                const data = await response.json()
                resolve({data})
            }else{
                const error = await response.text()
                reject(error)
            }
        }catch(err){
            console.log(err)
            reject(err)
        }
    })
}