import java.sql.*;
import java.util.ArrayList;

public class SongDAO {
    
    public ArrayList<Song> getAllSongs() {
        ArrayList<Song> list = new ArrayList<>();
        try {
            Connection con = DatabaseConnection.getConnection();
            String query = "SELECT * FROM songs";

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                int id = rs.getInt("id");
                String title = rs.getString("title");
                String artist = rs.getString("artist");

                list.add(new Song(id, title, artist));
            }
        } catch (Exception e) {
            System.out.println("Error fetching songs: " + e);
        }
        return list;
    }
}

