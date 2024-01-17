package gamestop.security;

import gamestop.user.User;
import gamestop.user.UserRepository;
import gamestop.user.dto.SignupDTO;
import gamestop.user.dto.UserDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class SignupController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/sign-up")
    public ResponseEntity<?> signupUser(@Valid @RequestBody SignupDTO signupDTO) {
        User userByEmail = userRepository.findFirstByEmail(signupDTO.getEmail());
        User userByLogin = userRepository.findFirstByLogin(signupDTO.getLogin());

        if (Objects.nonNull(userByLogin) || Objects.nonNull(userByEmail)) {
            return new ResponseEntity<>("User already exists in the database!", HttpStatus.BAD_REQUEST);
        }

        UserDTO createdUser = authService.createUser(signupDTO);
        if (createdUser == null) {
            return new ResponseEntity<>("User not created, come again later!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

}