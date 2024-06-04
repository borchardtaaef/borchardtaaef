       // Login
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonFace;
            this.ClientSize = new System.Drawing.Size(430, 330);
            this.Controls.Add(this.ck自动登录);
            this.Controls.Add(this.ck记住密码);
            this.Controls.Add(this.btn登录);
            this.Controls.Add(this.pictureBox2);
            this.Controls.Add(this.txt密码);
            this.Controls.Add(this.txt用户名);
            this.Controls.Add(this.btn最小化);
            this.Controls.Add(this.btn关闭);
            this.Controls.Add(this.pictureBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Login";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "QQ 2021";
            this.Load += new System.EventHandler(this.Login_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.btn关闭)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.btn最小化)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.PictureBox btn关闭;
        private System.Windows.Forms.PictureBox btn最小化;
        private System.Windows.Forms.TextBox txt用户名;
        private System.Windows.Forms.TextBox txt密码;
        private System.Windows.Forms.PictureBox pictureBox2;
        private System.Windows.Forms.Button btn登录;
        private System.Windows.Forms.CheckBox ck记住密码;
        private System.Windows.Forms.CheckBox ck自动登录;
    }
}

