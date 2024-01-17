package gamestop.user.dto;

public class AuthenticationResponse {

    private Long id;
    private String jwtToken;
    private String login;
    private String email;


    public AuthenticationResponse(Long id, String jwtToken, String login, String email) {
        this.id = id;
        this.jwtToken = jwtToken;
        this.login = login;
        this.email = email;
    }

    public AuthenticationResponse() {
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
