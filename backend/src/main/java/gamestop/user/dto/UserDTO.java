package gamestop.user.dto;

public class UserDTO {

    private Long id;

    private String email;

    public UserDTO() {
    }

    public UserDTO(Long id, String name) {
        this.id = id;
        this.email = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}