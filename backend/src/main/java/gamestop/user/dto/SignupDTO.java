package gamestop.user.dto;

import jakarta.validation.constraints.Email;

public class SignupDTO {

    @Email
    private String email;

    private String login;

    private String password;

    public SignupDTO(String email, String login, String password) {
        this.email = email;
        this.login = login;
        this.password = password;
    }

    public SignupDTO() {
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
