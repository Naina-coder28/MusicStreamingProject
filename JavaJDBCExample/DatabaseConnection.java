import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {

    public static Connection getConnection() {
        Connection con = null;
        try {
            String url = "jdbc:mysql://localhost:3306/musicdb";
            String username = "root";
            String password = "";

            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!");
        } catch (Exception e) {
            System.out.println("Database connection failed: " + e);
        }
        return con;
    }
}

