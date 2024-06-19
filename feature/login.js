


const login = async(req,res,next)=>{
    try{

        const existUser = await userName(req.input.user)

        if (!existUser) {
            createError({
              message: 'invalid credentials',
              statusCode: 400
            });
          }

          const isMatch = await password(
            req.input.password,
            existUser.password
          );
      
          if (!isMatch) {
            createError({
              message: 'invalid credentials',
              statusCode: 400
            });
          }

    }catch(err){
        next(err)
    }
}

module.exports = login;