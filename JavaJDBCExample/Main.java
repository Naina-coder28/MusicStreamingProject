import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        SongDAO dao = new SongDAO();
        ArrayList<Song> songs = dao.getAllSongs();

        System.out.println("Songs in database:");
        for (Song s : songs) {
            System.out.println(s.getId() + " - " + s.getTitle() + " by " + s.getArtist());
        }
    }
}

